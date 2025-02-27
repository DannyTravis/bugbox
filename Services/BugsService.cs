
using System;
using System.Collections.Generic;
using BugBox.Data;
using BugBox.Models;

namespace BugBox.Services
{
  public class BugsService
  {
    private readonly FakeDB _repo;

    public Bug AddBug(Bug myBug)
    {
      var alreadyThere = _repo.Bugs.Find(b => b.Title == myBug.Title);
      if (alreadyThere != null)
      {
        throw new Exception("This bug has already been logged");
      }
      myBug.Id = Guid.NewGuid().ToString();
      myBug.ReportedDate = DateTime.Now;
      myBug.LastModified = DateTime.Now;
      DateTime? nullTime = null;
      myBug.ClosedDate = nullTime;
      _repo.Bugs.Add(myBug);
      return myBug;
    }

    public Bug EditBug(Bug bugData)
    {
      var myBug = GetBugByID(bugData.Id);
      if(myBug.ClosedDate != null)
      {
        throw new Exception("You Can't Modify a Closed Bug, Create a New Bug and Try Again");
      }
      myBug.Title = bugData.Title;
      myBug.Description = bugData.Description;
      DateTime? nullTime = null;
      myBug.ClosedDate = nullTime;
      myBug.LastModified = DateTime.Now;
      return myBug;
    }

    public Bug GetBugByID(string myId)
    {
      var myBug = _repo.Bugs.Find(b => b.Id == myId);
      if (myBug == null)
      {
        throw new Exception("That ID does not exist");
      }
      return myBug;
    }

    public Bug CloseBug(string myId)
    {
      var myBug = GetBugByID(myId);
      myBug.ClosedDate = DateTime.Now;
      myBug.LastModified = DateTime.Now;
      return myBug;
    }

    public List<Bug> GetBugs()
    {
      return _repo.Bugs;
    }

    public List<BugNote> GetBugNotesById(string myId)
    {
      var myBug = GetBugByID(myId);
      if (myBug == null)
      {
        throw new Exception("That ID does not exist");
      }
      List<BugNote> bugNotes = _repo.BugNotes.FindAll(bn => bn.BugId == myBug.Id);
      return bugNotes;
    }

    public BugsService(FakeDB repo)
    {
        _repo = repo;
    }
  
  }

}