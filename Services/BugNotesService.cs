using System;
using System.Collections.Generic;
using BugBox.Data;
using BugBox.Models;


namespace BugBox.Services
{
    public class BugNotesService
    {
      private readonly FakeDB _repo;

      public BugNote AddNote(BugNote newBugNote)
      {
        var alreadyNote = _repo.BugNotes.Find(bn => bn.Body == newBugNote.Body);
        if (alreadyNote != null)
        {
          throw new Exception("Note already exists for this bug");
        }
        var tempBug = GetBugByID(newBugNote.BugId);
        if (tempBug.ClosedDate != null)
        {
          throw new Exception("You can not add to a clossed bug");
        }
        newBugNote.Id = Guid.NewGuid().ToString();
        newBugNote.Timestamp = DateTime.Now;
        _repo.BugNotes.Add(newBugNote);
        return newBugNote;
      }

    private Bug GetBugByID(string myId)
    {
      var myBug = _repo.Bugs.Find(b => b.Id == myId);
      if (myBug == null)
      {
        throw new Exception("That Bug ID does not exist");
      }
      return myBug;
    }

    public BugNote GetBugNoteByID(string myId)
    {
      var myBugNote = _repo.BugNotes.Find(bn => bn.Id == myId);
      if (myBugNote == null)
      {
        throw new Exception("That BugNote does not exist");
      }
      return myBugNote;
    }

    public BugNote EditBugNote(BugNote bugNoteData)
    {
      var myBugNote = GetBugNoteByID(bugNoteData.Id);
      var tempBug = GetBugByID(myBugNote.BugId);
      if(tempBug.ClosedDate != null)
      {
        throw new Exception("You can not add to a clossed bug");
      }

      myBugNote.Body = bugNoteData.Body;
      myBugNote.Timestamp = DateTime.Now;
      return myBugNote;
    }

    public List<BugNote> GetBugNotes()
    {
      return _repo.BugNotes;
    }

    public List<BugNote> GetBugNotesForBug(string bugID)
    {
      var myBugNoteList = _repo.BugNotes.FindAll(bn => bn.BugId == bugID);
      if (myBugNoteList == null)
      {
        throw new Exception("There are no Notes for that Bug");
      }
      return myBugNoteList;
    }
    
    public BugNotesService(FakeDB repo)
    {
      _repo = repo;
    }

    }
}