using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace CRUDWebApp.Models
{
    public class UserTask
    {
        public int Id { get; set; }

        public string TaskName { get; set; }

        public string Description { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }
        
        [ForeignKey("AssignedTo")]
        public int AssignedUserId { get; set; }
        public virtual User AssignedTo { get; set; }
    }
}
