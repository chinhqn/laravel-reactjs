<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="stylesheet" href="/css/app.css" type="text/css">
    </head>
    <body>
        @yield('content');
        <script type="text/javascript" src="/js/app.js"></script>
    </body>
</html>
