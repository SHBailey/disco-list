package com.discolist;

public class SplashActivity extends ReactActivity{
    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(saveInstanceState);
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}