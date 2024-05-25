using PrimeProperties.Models;

namespace PrimeProperties.Repositories.IRepositories
{
    public interface  IPropertyRepo
    {
        Task<bool> Add(Property entity);
        Task<bool> Update(Property entity);
        Task<bool> Delete(Guid id);
        Task<IEnumerable<Property>> GetAll();
        Task<Property?> GetById(Guid id);
    }
}
