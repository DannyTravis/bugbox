

using System.Collections.Generic;
using BugBox.Models;

namespace BugBox.Data
{
  public class FakeDB
  {
    public List<Bug> Bugs {get; set;} = new List<Bug>();
    public List<BugNote> BugNotes {get; set;} = new List<BugNote>();
  }
}