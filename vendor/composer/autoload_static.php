<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite82308387b4733cad758d968aa8e6372
{
    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInite82308387b4733cad758d968aa8e6372::$classMap;

        }, null, ClassLoader::class);
    }
}
