<!DOCTYPE html>
<html>
    <head>
        <?php
            include("part_of_site/head.php");
         ?>
        <link rel="stylesheet" type="text/css" href="/num_meth_2/main.css">
        <title>Numerical Methods | Second</title>
    </head>

    <body>

        <?php
            include("part_of_site/header.php");
            include("account/login.php");
        ?>

        <section id="body_page" class="body_page">
    		<div class="container">
                <div class="row d-flex justify-content-center">
                    <button type="button" id="cond" class="btn btn-dark but1">Add</button>
                    <button type="button" id="cond" class="btn btn-dark but2">Delete</button>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-5">
                        <table class="table table-bordered table-dark" id="tableA">
                            <tr>
                                <td contenteditable='true'></td>
                                <td contenteditable='true'></td>
                            </tr>
                            <tr>
                                <td contenteditable='true'></td>
                                <td contenteditable='true'></td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-lg-1">
                        <table class="table table-bordered table-dark" id="tableB">
                            <tr>
                                <td contenteditable='true'></td>
                            </tr>
                            <tr>
                                <td contenteditable='true'></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <button type="button" id="solve" class="btn btn-dark">Solve</button>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="about-text">
                            <h3 id="head_descr"><b>Kramer method</b></h3>
                            <table class="table table-bordered table-dark" id="table1">
                              <thead>
                                  <tr>
                                      <th data-field="id">#</th>
                                      <th data-field="first">First</th>
                                  </tr>
                              </thead>
                            </table>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-text">
                            <h3 id="head_descr"><b>Gausse method</b></h3>
                            <table class="table table-bordered table-dark" id="table2">
                              <thead>
                                  <tr>
                                      <th data-field="id">#</th>
                                      <th data-field="first">First</th>
                                  </tr>
                              </thead>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="about-text">
                            <h3 id="head_descr"><b>Zeidel method</b></h3>
                            <table class="table table-bordered table-dark" id="table3">
                              <thead>
                                  <tr>
                                      <th data-field="id">#</th>
                                      <th data-field="first">First</th>
                                  </tr>
                              </thead>
                            </table>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-text">
                            <h3 id="head_descr"><b>Iterations method</b></h3>
                            <table class="table table-bordered table-dark" id="table4">
                              <thead>
                                  <tr>
                                      <th data-field="id">#</th>
                                      <th data-field="first">First</th>
                                  </tr>
                              </thead>
                            </table>
                        </div>
                    </div>
                </div>
    		</div>
    	</section>

        <script src="/num_meth_2/index.js"></script>
        <script src="/num_meth_2/methods.js"></script>
    </body>
</html>
