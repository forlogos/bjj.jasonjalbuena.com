<?php
if ($handle = opendir('.')) {

    while (false !== ($entry = readdir($handle))) {

        if ($entry != "." && $entry != "..") {

            echo "$entry\n" . '<br/>;
        }
    }

    closedir($handle);
}