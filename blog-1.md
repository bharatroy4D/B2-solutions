Blog Topic
1.any type ব্যবহার করলে typescript type check করে না । typescript আর type protect করে না ।
যেকোন type accept করে, তাই any type কে type safety hole বলা হয় । এবং unknow এ যেকোন value রাখা যায় ।
কিন্তু use করার আগে check করতে হয় তাই এটা safer. এবং যখন আমরা value check করি কোন type এর এবং সে
অনুযায়ী safer করি , সেটাই type narrowing.

