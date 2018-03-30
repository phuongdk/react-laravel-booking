<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="/">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Dashboard</title>
    <link rel="icon" type="image/x-icon" href="{{ secure_url('public/dist/favicon.ico') }}">
    <link rel="stylesheet" type="text/css" href="{{ secure_url('public/dist/assets/css/fonts.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ secure_url('public/dist/assets/css/font-awesome.min.css') }}">
</head>
<body class="skin-blue layout-top-nav">
<div class="wrapper blog-wrapper-body">
<app-root></app-root>
</div>
<script type="text/javascript" src="{{ secure_url('public/dist/inline.bundle.js') }}"></script>
<script type="text/javascript" src="{{ secure_url('public/dist/polyfills.bundle.js') }}"></script>
<script type="text/javascript" src="{{ secure_url('public/dist/styles.bundle.js') }}"></script>
<script type="text/javascript" src="{{ secure_url('public/dist/vendor.bundle.js') }}"></script>
<script type="text/javascript" src="{{ secure_url('public/dist/main.bundle.js') }}"></script>
</body>
</html>
