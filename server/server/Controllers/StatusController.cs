using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using server.Models;

namespace server.Controllers
{
    [Produces("application/json")]
    [Route("api/Status")]
    public class StatusController : Controller
    {
        [HttpGet]
        public string Get()
        {
            var test = new Test();
            test.Message = "Hello World!";
            return JsonConvert.SerializeObject(test);
        }
    }
}