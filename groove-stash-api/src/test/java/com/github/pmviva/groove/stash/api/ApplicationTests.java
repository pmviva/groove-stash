/*
 *  Copyright (c) 2025 Pablo Martin Viva
 *
 *  This software is released under the MIT License.
 *  https://opensource.org/licenses/MIT
 */

package com.github.pmviva.groove.stash.api;

import com.github.pmviva.groove.stash.api.config.TestcontainersConfiguration;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;

@Import(TestcontainersConfiguration.class)
@SpringBootTest
class ApplicationTests {

    @Test
    void contextLoads() {
    }

}
