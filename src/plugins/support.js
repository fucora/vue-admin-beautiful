import { MessageBox } from "element-ui";

if (!!window.ActiveXObject || "ActiveXObject" in window) {
  MessageBox({
    title: "温馨提示",
    message:
      '自2015年3月起,微软已宣布弃用IE,且不再对IE提供任何更新维护,请访问<a target="_blank" style="color:blue" href="https://www.microsoftedgeinsider.com/zh-cn/download/">https://www.microsoftedgeinsider.com/zh-cn/download/</a>' +
      "下载最新版访问该系统,如果您使用的是双核浏览器,请您切换浏览器内核为极速模式",
    type: "warning",
    showConfirmButton: false,
    closeOnClickModal: false,
    closeOnPressEscape: false,
    closeOnHashChange: false,
    dangerouslyUseHTMLString: true,
  });
}
