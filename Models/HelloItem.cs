using System;

namespace HelloGrpc.Models
{
    public class HelloItem
    {
        public long Id { get; set; }
        public string Text { get; set; }
        public bool Completed { get; set; }
        public DateTime Creation { get; set; }
    }
}
