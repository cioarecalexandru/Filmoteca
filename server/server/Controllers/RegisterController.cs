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
    [Route("api/Register")]
    [EnableCors("MyPolicy")]
    public class RegisterController : Controller
    {
        [HttpPost]
        public string Register([FromBody] Test json)
        {
            if (json != null)
            {
                var test = new Message();
                test.Msg = string.Format("your user was registered! Have fun, {0}!", json.Email);
                return JsonConvert.SerializeObject(test);
            }
            else
            {
                return string.Empty;
            }
        }
    }
}