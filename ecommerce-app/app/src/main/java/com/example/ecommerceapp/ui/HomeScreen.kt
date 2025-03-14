package com.example.ecommerceapp.ui

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.ecommerceapp.ViewModel.AuthViewModel

@Composable
fun HomeScreen(
    viewModel: AuthViewModel,
    onLogout: () -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Welcome to the Home Screen!")
        Spacer(modifier = Modifier.height(16.dp))
        Button(onClick = {
            viewModel.logout(onLogout)
        }) {
            Text("Logout")
        }
    }
}