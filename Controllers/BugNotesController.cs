using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BugBox.Models;
using BugBox.Services;
using Microsoft.AspNetCore.Mvc;

namespace BugBox.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    
    public class BugNotesController : ControllerBase
    {
        //override madness


        private readonly BugNotesService _bns;
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<BugNote>> Get()
        {
            return _bns.GetBugNotes();
        }

        // GET api/values/5
        // [Route("/{id}/notes")]
        // [HttpGet("{id}")]
        // public ActionResult<List<BugNote>> Get([FromRoute] string id)
        // {
        //     try
        //     {
        //         List<BugNote> bugnotes = _bns.GetBugNotesForBug(id);
        //         return Ok(bugnotes);
        //     }
        //     catch(Exception e)
        //     {
        //     return BadRequest(e.Message);
        //     }
        // } 

        // POST api/values
        [HttpPost]
        public ActionResult<BugNote> Post([FromBody] BugNote myBugNote)
        {
            try
            {
            BugNote bugnote = _bns.AddNote(myBugNote);
            return Ok(myBugNote);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message); //code snippet
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public ActionResult<BugNote> Put(string id, [FromBody] BugNote bugNoteData)
        {
            try
            {
                bugNoteData.Id = id;
                var myBugNote = _bns.EditBugNote(bugNoteData);
                return Ok(myBugNote);
            }
            catch (Exception e) { return BadRequest(e.Message); }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        public BugNotesController(BugNotesService bns)
        {
            _bns = bns;
        }
    }

    
}
