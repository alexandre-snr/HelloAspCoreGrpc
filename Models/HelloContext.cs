using Microsoft.EntityFrameworkCore;

namespace HelloGrpc.Models
{
    public class HelloContext : DbContext
    {
        public HelloContext(DbContextOptions<HelloContext> opt) : base(opt)
        { }

        public DbSet<HelloItem> Items { get; set; }
    }
}
