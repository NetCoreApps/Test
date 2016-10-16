using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Test.Controllers
{
    public class RedirectTestFilterAttribute : ActionFilterAttribute
    {
        private readonly string url;

        public RedirectTestFilterAttribute(string url)
        {
            this.url = url;
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            context.Result = new RedirectResult(url);
        }
    }

    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        [RedirectTestFilter("/Home/About")]
        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
