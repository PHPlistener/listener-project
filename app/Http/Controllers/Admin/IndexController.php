<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    //加载主页
    public function index(){
    	return view('admin.index.index');
    }
}
