<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/users', 'UserController@index')->name('user.index');
Route::post('/users/create', 'UserController@store')->name('user.store');
Route::get('/users/{id}', 'UserController@show')->name('user.show');
Route::put('/users/{id}', 'UserController@update')->name('user.update');
Route::delete('/users/{id}', 'UserController@delete')->name('user.delete');
