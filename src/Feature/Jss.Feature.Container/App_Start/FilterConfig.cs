﻿using System.Web;
using System.Web.Mvc;

namespace Jss.Feature.Container
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
