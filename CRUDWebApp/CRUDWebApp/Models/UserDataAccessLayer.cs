using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDWebApp.Models
{
    public class UserDataAccessLayer
    {
        UserDbContext db = new UserDbContext();

        public IEnumerable<User> GetAllUsers()
        {
            try
            {
                return db.Users.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new user record   
        public int AddUser(User user)
        {
            try
            {
                db.Users.Add(user);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar user  
        public int UpdateUser(User user)
        {
            try
            {
                db.Entry(user).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular user  
        public User GetUserData(int id)
        {
            try
            {
                User user = db.Users.Find(id);
                return user;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular user  
        public int DeleteUser(int id)
        {
            try
            {
                User user = db.Users.Find(id);
                db.Users.Remove(user);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

    }
}
