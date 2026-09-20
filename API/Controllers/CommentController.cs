using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs.Comment;
using API.Interfaces;
using API.Mapping;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route ("api/comment")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepo;
        private readonly IStockRepository _stockRepo;
        public CommentController (ICommentRepository commentRepo, IStockRepository stockRepo)
        {
            _commentRepo = commentRepo;
            _stockRepo = stockRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var comment = await _commentRepo.GetAllAsync();

            var commentDto = comment.Select(s => s.ToCommentDto());

            return Ok(commentDto);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var comment = await _commentRepo.GetIdAsync(id);
            if (comment == null)
            {
                return NotFound();
            }

            return Ok(comment.ToCommentDto());
        }
    
        [HttpPost("{StockId:int}")]
        public async Task<IActionResult> CreateComment([FromRoute] int StockId, CreateCommentDto CommentDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            if(!await _stockRepo.StockExists(StockId))
            {
                return BadRequest("Stock does not exist");
            }

            var commentModel = CommentDto.ToCreateCommentDto(StockId);
            await _commentRepo.CreateAsync(commentModel);
            return CreatedAtAction(nameof (GetById), new { id = commentModel.Id}, commentModel.ToCommentDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateCommentDto updateDto) 
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var comment =  await _commentRepo.UpdateAsync(id, updateDto.ToUpdateCommentDto());

            if(comment == null)
            {
                return NotFound();
            }

            return Ok(comment.ToCommentDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var comment = await _commentRepo.DeleteAsync(id);

            if (comment == null)
            {
                return NotFound("Comment does not exist");
            }

            return Ok("its delete");
        }
    }


}