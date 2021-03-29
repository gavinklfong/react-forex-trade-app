import { sub } from "date-fns";
import { addSeconds } from "date-fns/esm";
import { Box, Text, Clock } from "grommet";
import React, { useEffect, useState } from "react";

const dateTimeFormatter = Intl.DateTimeFormat("default", {
  dateStyle: "short",
  timeStyle: "medium",
});

const convertToCountDownTime = (time: Date) => {
  const now = new Date();
  const expiryInterval = sub(time, {
    years: now.getFullYear(),
    months: now.getMonth(),
    days: now.getDay(),
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  });

  let countDownTime = `PT${expiryInterval.getHours()}H${expiryInterval.getMinutes()}M${expiryInterval.getSeconds()}S`;
  console.log(
    "now = " +
      dateTimeFormatter.format(now) +
      ", targetTime = " +
      dateTimeFormatter.format(time)
  );
  console.log("countDownTime = " + countDownTime);
  return countDownTime;
};

interface Props {
  onTimeup: () => void;
  targetTime: Date;
}

const CountDownTimer = (props: Props) => {
  const countDownTime = convertToCountDownTime(props.targetTime);

  const [countDownStyle, setCountDownStyle] = useState("accent-2");

  const countDownOnChange = (time: string) => {
    console.log(time);

    if (time === "P0H0M0S") {
      setCountDownStyle("status-critical");
      props.onTimeup();
    } else {
      setCountDownStyle("accent-2");
    }
  };

  return (
    <Box direction="row" gap="medium">
      <Text color={countDownStyle} size="xl">
        (
      </Text>
      <Text color={countDownStyle} size="xl">
        Valid By:{" "}
      </Text>
      {countDownTime && (
        <Text color={countDownStyle}>
          <Clock
            type="digital"
            time={countDownTime}
            run="backward"
            onChange={(time: any) => {
              countDownOnChange(time);
            }}
          />
        </Text>
      )}
      <Text color={countDownStyle} size="xl">
        )
      </Text>
    </Box>
  );
};

export default CountDownTimer;
