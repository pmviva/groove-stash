/*
 *  Copyright (c) 2025 Pablo Martin Viva
 *
 *  This software is released under the MIT License.
 *  https://opensource.org/licenses/MIT
 */

package com.github.pmviva.groove.stash.api;

import com.github.pmviva.groove.stash.api.config.TestcontainersConfiguration;
import org.springframework.boot.SpringApplication;

public class TestApplication {

    public static void main(String[] args) {
        SpringApplication.from(Application::main).with(TestcontainersConfiguration.class).run(args);
    }

}
