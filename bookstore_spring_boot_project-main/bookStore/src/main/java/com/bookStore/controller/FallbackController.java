package com.bookStore.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.http.HttpHeaders;

@Controller
public class FallbackController {
  
  @RequestMapping(value = "/{path:^(?!api|index\\.html|static|favicon\\.ico).*$}", method = RequestMethod.GET)
  public String fallback() {
    return "forward:/index.html";
  }
  
  @RequestMapping(value = "/{path:^(?!api|index\\.html|static|favicon\\.ico).*$}/{subpath:.*}", method = RequestMethod.GET)
  public String fallbackSubpath() {
    return "forward:/index.html";
  }
}
