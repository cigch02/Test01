using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Controllers;
using API.Data;
using API.DTOs;
using API.Interfaces;
using API.Models;
using API.Query;
using Microsoft.EntityFrameworkCore;

namespace API.Repository
{
    public class StockRepository : IStockRepository
    {
        private readonly ApplicationDBContext _context;

        public StockRepository(ApplicationDBContext content)
        {
            _context = content;
        }

        public async Task<Stock> CreateAsync(Stock stock)
        {
            await _context.Stock.AddAsync(stock);
            await _context.SaveChangesAsync();

            return stock;

        }

        public async Task<Stock?> DeleteAsync(int id)
        {
            var stock = await _context.Stock.FirstOrDefaultAsync(x => x.Id == id);
            if (stock == null)
            {
                return null;
            }

             _context.Stock.Remove(stock);

            await _context.SaveChangesAsync();

            return stock;
        }

        public async Task<List<Stock>> GetAllAsync(QueryObject query)
        {
            var stock =  _context.Stock.Include(c => c.Comment).AsQueryable();

            if(!string.IsNullOrWhiteSpace(query.CompanyName))
                stock = stock.Where(s => s.CompanyName.Contains(query.CompanyName));
            
            if(!string.IsNullOrWhiteSpace(query.Symbol))
                stock = stock.Where(s => s.Symbol.Contains(query.Symbol));
            
            if(!string.IsNullOrWhiteSpace(query.SortBy))
            {
                if(query.SortBy.Equals("Symbol", StringComparison.OrdinalIgnoreCase))
                {
                    stock = query.IsDecsending ? stock.OrderByDescending(s => s.Symbol) : stock.OrderBy(s => s.Symbol);
                }
            }

            var skipNumber = (query.PageNumber-1) * query.PageSize;
            

            return await stock.Skip(skipNumber).Take(query.PageSize).ToListAsync();
        }

        public async Task<Stock?> GetByIdAsync(int id)
        {
            return await _context.Stock.Include(c => c.Comment).FirstOrDefaultAsync(i => i.Id == id );
        }

        public Task<bool> StockExists(int id)
        {
            return _context.Stock.AnyAsync(s => s.Id == id);
        }

        public async Task<Stock?> UpdateAsync(int id, UpdateStockDTO stockDTO)
        {
            var  stock = await _context.Stock.FirstOrDefaultAsync(x => x.Id == id);
            if (stock == null)
            {
                return null;
            }
            stock.Symbol = stockDTO.Symbol;
            stock.CompanyName = stockDTO.CompanyName;
            stock.Purchase = stockDTO.Purchase;
            stock.LastDiv = stockDTO.LastDiv;
            stock.Industry = stockDTO.Industry;
            stock.marketCap = stockDTO.marketCap;

            await _context.SaveChangesAsync();

            return stock;
        }
    }
}