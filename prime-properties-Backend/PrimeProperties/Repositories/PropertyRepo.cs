using Microsoft.EntityFrameworkCore;
using PrimeProperties.Data;
using PrimeProperties.Models;
using PrimeProperties.Repositories.IRepositories;

namespace PrimeProperties.Repositories
{
    public class PropertyRepo : IPropertyRepo
    {
        private readonly AppDbContext _db;
        public PropertyRepo(AppDbContext db)
        {
            _db = db;
        }
        public async Task<bool> Add(Property entity)
        {
            await _db.AddAsync(entity);
            return await Complete();
        }

        public async Task<bool> Delete(Guid id)
        {
            return await _db.Properties.Where(property => property.Id == id).ExecuteDeleteAsync() > 0;
        }

        public async  Task<IEnumerable<Property>> GetAll()
        {
            return await _db.Properties.ToListAsync();
        }

        public async  Task<Property?> GetById(Guid id)
        {
            return await _db.Properties.AsNoTracking().FirstOrDefaultAsync(property => property.Id == id);
        }

        public async Task<bool> Update(Property entity)
        {
            _db.Properties.Update(entity);
            return await Complete();
        }

        private async Task<bool> Complete()
        {
            var result = await _db.SaveChangesAsync();
            return result > 0;
        }
    }
}
