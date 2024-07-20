using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using API_AUTH.Models;


namespace API_AUTH.Data
{
    public class DataContext:IdentityDbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {
        
        
        }
        public DbSet<API_AUTH.Models.BlogPost> BlogPost { get; set; } = default!;
    }
}
