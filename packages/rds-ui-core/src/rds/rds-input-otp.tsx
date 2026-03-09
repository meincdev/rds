"use client";

/**
 * RDS Input OTP
 *
 * One-time password input component.
 * Re-exports shadcn/ui InputOTP with RDS naming.
 */

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "../primitives/input-otp";

export {
  InputOTP as RdsInputOtp,
  InputOTPGroup as RdsInputOtpGroup,
  InputOTPSlot as RdsInputOtpSlot,
  InputOTPSeparator as RdsInputOtpSeparator,
};
