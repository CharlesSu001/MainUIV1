using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class MainUIController : Controller
    {
        // GET: MainUI
        public ActionResult StudentUI()
        {
            return View();
        }
        // GET: MainUI
        public ActionResult TeacherUI1()
        {
            return View();
        }
        public ActionResult TeacherUI2()
        {
            return View();
        }
        public ActionResult ModifyStuInfo()
        {
            return View();
        }
        public ActionResult ModifyTeaInfo()
        {
            return View();
        }



    }
}