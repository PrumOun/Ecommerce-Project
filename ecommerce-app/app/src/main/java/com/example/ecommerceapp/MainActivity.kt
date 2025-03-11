package com.example.ecommerceapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.remember
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.ecommerceapp.ViewModel.AuthViewModel
import com.example.ecommerceapp.ui.*

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val navController = rememberNavController()
            val viewModel = remember { AuthViewModel() }

            NavHost(navController, startDestination = "login") {
                composable("login") {
                    LoginScreen(
                        viewModel = viewModel,
                        onLoginSuccess = { navController.navigate("home") },
                        onNavigateToRegister = { navController.navigate("register") }
                    )
                }
                composable("register") {
                    RegisterScreen(
                        viewModel = viewModel,
                        onRegisterSuccess = { navController.navigate("home") }
                    )
                }
                composable("home") {
                    HomeScreen(
                        viewModel = viewModel,
                        onLogout = { navController.navigate("login") }
                    )
                }
            }
        }
    }
}