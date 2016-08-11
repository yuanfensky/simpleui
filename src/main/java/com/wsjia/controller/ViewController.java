package com.wsjia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by pc on 2016/8/10.
 */
@Controller
@RequestMapping("/view/")
public class ViewController {

    @Autowired
    private RestTemplate restTemplate;

    @RequestMapping("pList")
    @ResponseBody
    public List productList(HttpServletResponse response){
        response.setHeader("Access-Control-Allow-Origin","*");
        return restTemplate.getForObject("http://192.168.2.114:8091/product/list", ArrayList.class);
    }
    @RequestMapping("bList")
    @ResponseBody
    public List brandList(HttpServletResponse response){
        response.setHeader("Access-Control-Allow-Origin","*");
        return restTemplate.getForObject("http://192.168.2.114:8091/brand/list", ArrayList.class);
    }
    @RequestMapping("mList/{fatherRId}")
    @ResponseBody
    public List menuList(HttpServletResponse response,@PathVariable("fatherRId") String fatherRId){
        response.setHeader("Access-Control-Allow-Origin","*");
        System.out.print(fatherRId);
        return restTemplate.getForObject("http://192.168.2.197:8088/jmenu/getMenuByFathRid/"+fatherRId, ArrayList.class);
    }

    @RequestMapping("list")
    public String toView(){
        return "list";
    }

}
