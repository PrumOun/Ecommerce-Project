package com.example.ecommerceapp.ViewModel

import LoginRequest
import RegisterRequest
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.ecommerceapp.Networks.RetrofitClient
import kotlinx.coroutines.launch

class AuthViewModel : ViewModel() {
    var token by mutableStateOf("")
        private set

    var errorMessage by mutableStateOf("")
        private set

    fun register(name: String, email: String, password: String, onSuccess: () -> Unit) {
        viewModelScope.launch {
            try {
                val response = RetrofitClient.apiService.register(RegisterRequest(name, email, password))
                if (response.isSuccessful && response.body()?.status == true) {
                    token = response.body()?.token ?: ""
                    onSuccess()
                } else {
                    errorMessage = response.body()?.message ?: "Registration failed"
                }
            } catch (e: Exception) {
                errorMessage = e.message ?: "An error occurred"
            }
        }
    }

    fun login(email: String, password: String, onSuccess: () -> Unit) {
        viewModelScope.launch {
            try {
                val response = RetrofitClient.apiService.login(LoginRequest(email, password))
                if (response.isSuccessful && response.body()?.status == true) {
                    token = response.body()?.token ?: ""
                    onSuccess()
                } else {
                    errorMessage = response.body()?.message ?: "Login failed"
                }
            } catch (e: Exception) {
                errorMessage = e.message ?: "An error occurred"
            }
        }
    }

    fun logout(onSuccess: () -> Unit) {
        viewModelScope.launch {
            try {
                val response = RetrofitClient.apiService.logout("Bearer $token")
                if (response.isSuccessful) {
                    token = ""
                    onSuccess()
                } else {
                    errorMessage = response.body()?.message ?: "Logout failed"
                }
            } catch (e: Exception) {
                errorMessage = e.message ?: "An error occurred"
            }
        }
    }
}