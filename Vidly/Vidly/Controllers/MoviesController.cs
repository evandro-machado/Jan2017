using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vidly.Models;

namespace Vidly.Controllers
{
    public class MoviesController : Controller
    {
        // GET: Movies/Random
        public ActionResult Random()
        {
            var Movie = new Movie() { Name = "Shrek!" };

            return View(Movie);
            //return Content("Hello World");
            //return HttpNotFound();

        }

        [Route("movies/released/{year(\\d{4})}/{month:regex(\\d{2}:range(1,12))}")]
        public ActionResult ByReleaseYear(int year, int month)
        {
            return Content(year + "/" + month);
        }

    }
}