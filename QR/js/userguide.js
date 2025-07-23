$(document).ready(function () {
  // Use event delegation for .breadcrumb-item click
  $(".breadcrumb-item").click(function () {
    var id = $(this).attr("id");
    var id = $(this).attr("id");
    // Hide all main sections
     if (id === "coupon_section") {
      $(".main_div").addClass("hide");
      $(".coupon_user_guide").removeClass("hide");
      $(".qr_sticker").addClass("hide");
      // Highlight the active breadcrumb
      $(".breadcrumb-item").removeClass("current");
      $(this).addClass("current");
    } 
    if (id === "usage_section") {
      $(".main_div").addClass("hide");
      $(".coupon_user_guide").addClass("hide");
      $(".qr_sticker").removeClass("hide");
      // Highlight the active breadcrumb
      $(".breadcrumb-item").removeClass("current");
      $(this).addClass("current");
    }
    if (id === "download_section") {
      $(".main_div").removeClass("hide");
      $(".coupon_user_guide").addClass("hide");
      $(".qr_sticker").addClass("hide");
      // Highlight the active breadcrumb
      $(".breadcrumb-item").removeClass("current");
      $(this).addClass("current");
    }
  });
  // Combine click event listener for both .guide_div_text and .div_23 elements
  $(".guide_div_text").click(function () {
    // Get the image path from the data attribute of the clicked item
    let newImage = $(this).data("image");

    // Update the src of the image placeholder
    $("#stepImage").attr("src", newImage);

    // Apply style adjustments to #stepImage if needed
    $("#stepImage").css({
      width: "100%",
      "max-width": "600px",
      height: "auto",
    });

    // ================================================================================================================================

    // Optional: Highlight the active step
    $(".guide_div_text").removeClass("active");
    $(".guide_div_text").find(".guide_div_text_inner_text_value").removeClass("active");
    // If step4 is clicked, activate only main text
    if ($(this).attr("id") === "step4") {
      $(this).addClass("active");
      $(this).find(".guide_div_text_inner_text_value").addClass("active");
      // Remove active from all sub-steps
      $(".guide_div_text_sub_text_value").removeClass("active");
    } else {
      $(this).addClass("active");
      $(this).find(".guide_div_text_inner_text_value").addClass("active");
    }

    // Show or hide QR codes based on the selected step
    if ($(this).attr("id") === "step1") {
      $("#qrDownloadCodes").show(); // Show QR codes only for the first step
    } else {
      $("#qrDownloadCodes").hide(); // Hide QR codes for other steps
    }
    if ($(this).attr("id") === "step2") {
      $(".circle").removeClass("hide");
    } else {
      $(".circle").addClass("hide");
    }
    // Highlight the corresponding number and circle
    var stepId = $(this).attr("id");
    var stepNum = stepId.replace('step', '');
    // Remove active from all div_11 and number_class
    $(".div_11").removeClass("active");
    $(".number_class").removeClass("active");
    // Add active to the matching div_11 and number_class
    $("#number_step_" + stepNum).addClass("active");
    $("#number_step_" + stepNum + " .number_class").addClass("active");
  });

  // Sub-step click handler for step 4
  $(".guide_div_text_sub_text_value").click(function (e) {
    e.stopPropagation(); // Prevent parent click
    // Remove active from main step 4 text and all sub-steps
    $("#step4 .guide_div_text_inner_text_value").removeClass("active");
    $(".guide_div_text_sub_text_value").removeClass("active");
    // Remove active from all .guide_div_text
    $(".guide_div_text").removeClass("active");
    // Add active only to the clicked sub-step
    $(this).addClass("active");
    // Add active to parent .guide_div_text
    $(this).closest('.guide_div_text').addClass('active');
    // Update image
    let newImage1 = $(this).data("image");
    $("#stepImage").attr("src", newImage1);
    $("#stepImage").css({
      width: "100%",
      "max-width": "600px",
      height: "auto",
    });
    if($(this).text() === "4-2. 부착용 QR스티커 없을경우") {
      $(".step4_sub_text").removeClass("hide");
    }else {
      $(".step4_sub_text").addClass("hide");
    }
  });

  $(".div_23").click(function () {
      // Get the image path from the data attribute of the clicked item
      let newImage = $(this).data("image");

      // Update the src of the image placeholder
      $("#levelImage").attr("src", newImage);

      // Optional: Highlight the active step
      $(".div_23").removeClass("active"); // Remove active class from all steps
      $(this).addClass("active"); // Add active class to the clicked step
      $(".div_23_text").removeClass("active"); // Remove active class from all steps
      $(this).find(".div_23_text").addClass("active");
      // 
      var stepId = $(this).attr("id");
      var stepNum = stepId.replace('level', '');
      // Remove active from all div_11 and number_class
      $(".div_11").removeClass("active");
      $(".div_11_inner").removeClass("active");
      // Add active to the matching div_11 and number_class
      $("#coupon_step_" + stepNum).addClass("active");
      $("#coupon_step_" + stepNum + " .div_11_inner").addClass("active");
    });

  // ================================================================================================================================

  // Combine click event listener for both .guide_div_text and .div_23 elements
  $(".qr_sticker_images").click(function () {
    // Get the image path from the data attribute of the clicked item
    let stickerId = $(this).attr("id");
    if (stickerId === "grade1") {
      $(".Sticker_image_1_container").removeClass("hide");
      $(".Sticker_image_2_container").addClass("hide");
      $(".Sticker_image_3_container").addClass("hide");
      $(".Sticker_image_4_container").addClass("hide");
    }
    if (stickerId === "grade2") {
      $(".Sticker_image_1_container").addClass("hide");
      $(".Sticker_image_2_container").removeClass("hide");
      $(".Sticker_image_3_container").addClass("hide");
      $(".Sticker_image_4_container").addClass("hide");
    }
    if (stickerId === "grade3") {
      $(".Sticker_image_1_container").addClass("hide");
      $(".Sticker_image_2_container").addClass("hide");
      $(".Sticker_image_3_container").removeClass("hide");
      $(".Sticker_image_4_container").addClass("hide");
    }
    if (stickerId === "grade4") {
      $(".Sticker_image_1_container").addClass("hide");
      $(".Sticker_image_2_container").addClass("hide");
      $(".Sticker_image_3_container").addClass("hide");
      $(".Sticker_image_4_container").removeClass("hide");
    }
    $(".qr_sticker_images").removeClass("active"); // Remove active class from all steps
    $(this).addClass("active");
    // ================================================================================================================================
    // ============================================================================
    // ============================================================================
    $(".qr_sticker_image_text").removeClass("active"); // Remove active class from all steps
    $(this).find(".qr_sticker_image_text").addClass("active");

    var stepId = $(this).attr("id");
      var stepNum = stepId.replace('grade', '');
      // Remove active from all div_11 and number_class
      $(".div_11").removeClass("active");
      $(".div_11_inner").removeClass("active");
      // Add active to the matching div_11 and number_class
      $("#sticker_step_" + stepNum).addClass("active");
      $("#sticker_step_" + stepNum + " .div_11_inner").addClass("active");
  });
  $("#videoButton_1, #videoButton_3").click(function () {
    $(".breadcrumb-container").addClass("hide");
  });

  $(".close-btn").click(function () {
    $(".breadcrumb-container").removeClass("hide");
  });
});
