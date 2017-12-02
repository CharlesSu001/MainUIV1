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

        public JsonResult SendTeacherData()
        {
            return Json( new {username="邱明",teacherid="2432012522",course1= "J2EE", course2 = "OOAD",course3 = "JAVA",course4 = "OS" ,phone= "18159275806",school="厦门大学" });
        }
        public JsonResult SendStudentData()
        {
            return Json(new { username = "韦小宝", stuid = "243201522xxxxx", course1 = "J2EE", course2 = "OOAD", course3 = "JAVA", course4 = "OS", teacher1 = "邱明", teacher2 = "邱明", teacher3 = "王美红", teacher4 = "吴清强", phone = "18159275806", school = "厦门大学" });
        }

    }
}