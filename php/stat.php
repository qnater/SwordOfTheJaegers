<?php

$path = "swordofthejaegers_stat.txt";
if(file_exists($path))
{
$handle = fopen($path, 'r+');
$compte = fgets($handle);
}
else
{
$handle = fopen($path, 'w');
$compte = 0;
}
if(!isset($_SESSION['stat']))
{
$_SESSION['stat'] = $compte++;					
fseek($handle, 0);
fputs($handle, $compte);
}
fclose($handle);