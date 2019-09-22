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
    public class BugsController : ControllerBase
    {
        private readonly BugsService _bs;
        private readonly BugNotesService _bns;

        // GET api/bugs
        [HttpGet]
        public ActionResult<IEnumerable<Bug>> Get()
        {
            return _bs.GetBugs();
        }

        // GET api/bugs/5
        [HttpGet("{id}")]      
        public ActionResult<Bug> Get(string id)
        {
            try
            {
                Bug bug = _bs.GetBugByID(id);
                return Ok(bug);
            }
            catch(Exception e)
            {
            return BadRequest(e.Message);
            }
        }


        [HttpGet("{id}/[action]")]
        public ActionResult<List<BugNote>> Get(string id, [FromRoute] string action)
        {
            try
            {
                List<BugNote> bugnotes = _bns.GetBugNotesForBug(id);
                return Ok(bugnotes);
            }
            catch(Exception e)
            {
            return BadRequest(e.Message);
            }
        } 

        // POST api/values
        [HttpPost]
        public ActionResult<Bug> Post([FromBody] Bug myBug)
        {
            try
            {
            Bug bug = _bs.AddBug(myBug);
            return Ok(myBug);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message); //code snippet
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public ActionResult<Bug> Put(string id, [FromBody] Bug bugData)
        {
            try
            {
                bugData.Id = id;
                var myBug = _bs.EditBug(bugData);
                return Ok(myBug);
            }
            catch (Exception e) { return BadRequest(e.Message); }
        }


        // DELETE api/values/5
        [HttpDelete("{id}")]
        public ActionResult<Bug> Delete(string id)
        {
            try
            {
            var myBug = _bs.CloseBug(id);
            return Ok(myBug);
            }
            catch (Exception e)
            {
            return BadRequest(e.Message);
            }
        }

    public BugsController(BugsService bs, BugNotesService bns)
    {
        _bs = bs;
        _bns = bns;
    }

    }
}
