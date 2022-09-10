import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BodyComponent } from "./body/body.component";
import { OtpVerificationComponent } from "./otp-verification/otp-verification.component";

const routes: Routes = [
  {
    path: 'otp-verification',
    component: OtpVerificationComponent
  },
  {
    path: '',
    component: BodyComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class appRoutingModule { }
