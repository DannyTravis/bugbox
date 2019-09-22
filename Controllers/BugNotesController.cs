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

        private readonly BugNotesService _bns;
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<BugNote>> Get()
        {
            return _bns.GetBugNotes();
        }

        // GET api/values/5
  /*     [HttpGet("{id}/notes")]
        public ActionResult<string> Get(int id)
        {
           
        } */

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
