using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using server.Models;

namespace server.Controllers
{
    [Produces("application/json")]
    [Route("api/Status")]
    [EnableCors("MyPolicy")]
    public class StatusController : Controller
    {
        [HttpGet]
        public string Get()
        {
            var test = new Message();
            test.Msg = "Hello World!";
            return JsonConvert.SerializeObject(test);
        }
    }
}