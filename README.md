# SZU一键评教助手 | SZU One-Click Evaluation Helper

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-4.0-blue.svg)](https://github.com/Liunian2000/szu-evaluation-helper)
[![Platform](https://img.shields.io/badge/platform-Tampermonkey-brightgreen.svg)](https://www.tampermonkey.net/)

一个为深圳大学（SZU）学生设计的油猴脚本，旨在简化 `jxpj.szu.edu.cn` 上的教学评教流程，将繁琐的重复性操作自动化，节省宝贵时间。

## ✨ 功能特性

-   **一键填写**：自动为所有单选题选择第一个选项（通常是最高分/最积极的评价）。
-   **自动填充建议**：自动在主观建议栏中填写“无”。
-   **两步安全操作**：采用“填写”与“提交”分离的两步操作，防止意外提交，让您在提交前有最终确认的机会。
-   **美观的悬浮按钮**：在页面右下角生成一个现代、美观且不干扰视线的悬浮操作按钮。
-   **交互式反馈**：按钮的图标、颜色和文字会根据操作状态（待填写 -> 待提交 -> 已提交）改变，提供清晰的视觉反馈。
-   **响应式设计**：在手机等小屏幕设备上，按钮会自动收缩为图标，节省屏幕空间。

## 🛠️ 安装步骤

1.  **安装用户脚本管理器**
    首先，你的浏览器需要一个用户脚本管理器扩展。推荐使用 [**Tampermonkey**](https://www.tampermonkey.net/)。
    -   [Chrome 用户](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
    -   [Firefox 用户](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
    -   [Edge 用户](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2.  **安装本脚本**
    点击下面的链接，Tampermonkey 会自动弹出安装页面。

    -   **[点击此处从greasyfork安装](https://greasyfork.org/zh-CN/scripts/553863-szu%E4%B8%80%E9%94%AE%E8%AF%84%E6%95%99%E5%8A%A9%E6%89%8B)**
    
## 📖 使用方法

1.  登录并进入深圳大学教学评教页面 (`https://jxpj.szu.edu.cn/*`)。
2.  脚本会自动在页面右下角加载一个蓝绿色的悬浮按钮。
3.  **第一次点击**按钮：脚本会自动填写所有题目。按钮会变为绿色，并提示“确认提交”。
4.  **第二次点击**按钮：脚本会点击页面底部的“提交”按钮。

### ⚠️ 重要提示：关于“全A警告”弹窗

-   当所有题目都选择第一个选项后，点击“提交”会弹出一个“全A警告”对话框。
-   **本脚本不会处理此弹窗**。
-   您需要**手动点击弹窗上的“取消”按钮**来完成最终的提交。
    

## 📄 许可证

本项目采用 [MIT License](https://opensource.org/licenses/MIT) 授权。
