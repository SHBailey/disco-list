package com.discolist;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import android.content.Intent;

public class SplashActivity extends ReactActivity{
    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}