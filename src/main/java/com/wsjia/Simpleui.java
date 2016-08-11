package com.wsjia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

/**
 * Created by pc on 2016/8/10.
 */
@SpringBootApplication
@EnableDiscoveryClient
public class Simpleui {
    public static void main(String[] args){
        SpringApplication.run(Simpleui.class);
    }
}
