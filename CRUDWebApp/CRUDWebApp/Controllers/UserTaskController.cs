using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUDWebApp.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CRUDWebApp.Controllers
{
    public class UserTaskController : Controller
    {
        UserTaskDataAccessLayer objuserTask = new UserTaskDataAccessLayer();

        [HttpGet]
        [Route("api/UserTask/Index")]
        public IEnumerable<UserTask> Index()
        {
            return objuserTask.GetAllUserTasks();
        }

        [HttpPost]
        [Route("api/UserTask/Create")]
        public int Create([FromBody] UserTask user)
        {
            return objuserTask.AddUserTask(user);
        }

        [HttpGet]
        [Route("api/UserTask/Details/{id}")]
        public UserTask Details(int id)
        {
            return objuserTask.GetUserTaskData(id);
        }

        [HttpPut]
        [Route("api/UserTask/Edit")]
        public int Edit([FromBody]UserTask userTask)
        {
            return objuserTask.UpdateUserTask(userTask);
        }

        [HttpDelete]
        [Route("api/UserTask/Delete/{id}")]
        public int Delete(int id)
        {
            return objuserTask.DeleteUserTask(id);
        }


        [HttpGet]
        [Route("api/UserTask/GetUserList")]
        public IEnumerable<User> Details()
        {
            return objuserTask.GetUsers();
        }

    }
}
