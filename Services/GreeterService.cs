using Google.Protobuf.WellKnownTypes;

using Grpc.Core;

using HelloGrpc.Models;

using Microsoft.Extensions.Logging;

using System;
using System.Threading.Tasks;

using static HelloGrpc.GetItemsResponse.Types;

namespace HelloGrpc
{
    public class GreeterService : Greeter.GreeterBase
    {
        private readonly ILogger<GreeterService> _logger;
        private readonly HelloContext _db;

        public GreeterService(ILogger<GreeterService> logger, HelloContext db)
        {
            _logger = logger;
            _db = db;
        }

        public override Task<AddItemResponse> AddItem(AddItemRequest request, ServerCallContext context)
        {
            _db.Items.Add(new HelloItem
            {
                Text = request.Text,
                Completed = request.Completed,
                Creation = DateTime.Now,
            });
            _db.SaveChanges();

            _logger.LogInformation("add item.");

            return Task.FromResult(new AddItemResponse { });
        }

        public override Task<GetItemsResponse> GetItems(GetItemsRequest request, ServerCallContext context)
        {
            var response = new GetItemsResponse();

            foreach (var item in _db.Items)
            {
                response.Items.Add(new Item {
                    Text = item.Text,
                    Completed = item.Completed, 
                    Creation = Timestamp.FromDateTime(DateTime.SpecifyKind(item.Creation, DateTimeKind.Utc)) 
                });
            }

            _logger.LogInformation("items listed.");

            return Task.FromResult(response);
        }
    }
}
