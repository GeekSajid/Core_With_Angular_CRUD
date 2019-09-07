using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CRUDWebApp.Models
{
    public class UserTaskDataAccessLayer
    {

        UserDbContext db = new UserDbContext();

        public IEnumerable<UserTask> GetAllUserTasks()
        {
            try
            {
                return db.UserTasks.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new userTask task record   
        public int AddUserTask(UserTask userTask)
        {
            try
            {
                db.UserTasks.Add(userTask);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar userTask task  
        public int UpdateUserTask(UserTask userTask)
        {
            try
            {
                db.Entry(userTask).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular userTask task  
        public UserTask GetUserTaskData(int id)
        {
            try
            {
                UserTask userTask = db.UserTasks.Find(id);
                return userTask;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular userTask task  
        public int DeleteUserTask(int id)
        {
            try
            {
                UserTask userTask = db.UserTasks.Find(id);
                db.UserTasks.Remove(userTask);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Get the list of Users  
        public List<User> GetUsers()
        {
            List<User> userList = new List<User>();
            userList = (from UserList in db.Users select UserList).ToList();

            return userList;
        }

    }
}
