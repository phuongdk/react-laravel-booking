<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home-react');
});
Route::get('/{any?}', function () {
    return view('home-react');
});
Route::get('/users/{any?}', function () {
    return view('home-react');
});
Route::get('/bookings/{any?}', function () {
    return view('home-react');
});
Route::get('/rooms/{any?}', function () {
    return view('home-react');
});