<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
     public function index(Request $request)
    {
        $users = User::orderBy('id', 'asc');
        if ($search = $request->input('search')) {
            $users->where('name', 'like', "%$search%");
        }
        $users = $users->paginate(10);
        return response()->json($users);
    }

    public function store(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|string|min:6',
        ]);

        if ($valid->passes()) {
            $user = User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => bcrypt($request->input('password')),
            ]);
            return response()->json([
                'message' => "Successfully create User $user->name",
                'status' => 'success',
                'user' => $user->toArray()
            ]);
        } else {
            $errors = $valid->errors();
            $data = [];
            !$errors->has('name') ?: $data['name'] = $errors->first('name');
            !$errors->has('email') ?: $data['email'] = $errors->first('email');
            !$errors->has('password') ?: $data['password'] = $errors->first('password');
            return response()->json([
                'message' => $data,
                'status' => 'danger'
            ]);
        }
    }

    public function show($id) {
        if ($user = User::find($id)) {
            return response()->json($user);
        }
        return response()->json([
            'error' => 'Error getting data'
        ]);
    }

    public function update(Request $request, $id)
    {
        $valid = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
            'password' => 'string|min:6',
        ]);

        if ($valid->passes()) {
            $user = User::find($id);
            if ($user != null) {
                $user->name = $request->input('name');
                $user->email = $request->input('email');
                if ($request->input('password')) {
                    $user->password = bcrypt($request->input('password'));
                }
                $user->save();
                return response()->json([
                    'message' => "Update User $user->name ($user->email) sucessfully",
                    'status' => 'success',
                    'user' => $user->toArray()
                ]);
            } else {
                return response()->json([
                    'message' => 'Error updating data',
                    'status' => 'warning'
                ]);
            }
        } else {
            $errors = $valid->errors();
            $data = [];
            !$errors->has('name') ?: $data['name'] = $errors->first('name');
            !$errors->has('email') ?: $data['email'] = $errors->first('email');
            !$errors->has('password') ?: $data['password'] = $errors->first('password');
            return response()->json([
                'message' => $data,
                'status' => 'danger'
            ]);
        }
    }


    public function delete(Request $request, $id)
    {
        if ($user = User::find($id)) {
            $user->delete();
            return response()->json([
                'message' => 'Delete successfully user ' . $user->name,
                'status' => 'success'
            ]);
        }
        return response()->json([
            'message' => 'Error deleting data!',
            'status' => 'danger'
        ]);
    }
}