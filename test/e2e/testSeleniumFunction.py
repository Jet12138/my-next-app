from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
import time

# 有时页面元素不会立即加载完成，我们可以使用 WebDriverWait 来等待元素出现：
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC



# 1. 从 Selenium 4 开始，在浏览器驱动的管理方式上发生了变化：Selenium 4 尝试自动检测系统中安装的浏览器版本，并下载相应的驱动程序，这意味着用户不再需要手动下载和设置驱动程序路径，除非他们需要特定版本的驱动程序。
# 当国内的网络环境，自动检测下载驱动需要不一样的网络环境，所以建议手动下载驱动，然后指定驱动路径。

# 1.1. 在 Selenium 4 中，不再直接在 webdriver.Chrome 中设置驱动程序路径，而是通过引入 Service 对象来设置。这样可以避免弃用警告，并确保驱动程序的正确加载。例如：

# service = ChromeService(executable_path="PATH_TO_DRIVER")
service = ChromeService()
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

# 使用 get 方法打开一个网页：
driver.get('https://www.baidu.com')

# 2. 有时候一个网页加载太慢，会导致异常出现，为了能够顺利抓取数据，可以让页面加载几秒后再通过执行 JavaScript 代码 window.stop()，强制停止页面加载。
# 等待页面加载完成
time.sleep(2)  # 可以根据需要调整等待时间
# 强制停止页面加载
driver.execute_script("window.stop();")

# 可以使用 find_element 方法来查找页面上的元素。例如，查找一个输入框并输入文本：
input_element = driver.find_element('id', 'kw')
input_element.send_keys('今日黄金价格')

# 可以使用 click 方法来点击按钮：
button_element = driver.find_element('id', 'su')
button_element.click()

# 有时页面元素不会立即加载完成，我们可以使用 WebDriverWait 来等待元素出现：
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

wait = WebDriverWait(driver, 10)
# TODO 这里下一行有问题，需要修改
# element = wait.until(EC.presence_of_element_located((By.ID, 'kw')))

# 3. 我们可以使用 title 属性来获取当前页面的标题：
print("driver.title: ", driver.title)

# 4. 完成操作后，记得关闭浏览器：
# driver.quit()
